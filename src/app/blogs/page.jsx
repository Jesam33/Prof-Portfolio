"use client";
import { useState } from "react";
import { Slide } from "@/app/Animation/Slide";
import RefLink from "@/components/Reflink";
import EmptyState from "@/components/Empty-State";
import { RiArticleLine } from "react-icons/ri";
import { articles } from "@/app/Data/Articles";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 16;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="mt-32 container mx-auto px-6">
      <Slide delay={0.16}>
        <div className="mb-16 text-center">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Research Articles & Blogs
          </h2>
        </div>
      </Slide>

      {articles.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentArticles.map((article, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg dark:border-zinc-800 border-zinc-200 bg-white dark:bg-zinc-900 flex flex-col"
              >
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  <span>{article.authors}</span>
                  <span>| {article.journal}</span>
                  <span>| Vol. {article.volume}</span>
                  <span>| {article.year}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
                  {article.description}
                </p>
                <RefLink
                  href={article.url}
                  className="mt-4 inline-flex items-center text-primary-color dark:text-tertiary-color hover:underline"
                >
                  Read More
                </RefLink>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-300 dark:bg-zinc-700 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}
              className="px-4 py-2 rounded bg-gray-300 dark:bg-zinc-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </Slide>
      ) : (
        <div className="flex flex-col items-center text-center mt-12">
          <RiArticleLine size={50} className="text-gray-500" />
          <h2 className="text-lg font-semibold mt-4">No Articles Available</h2>
          <p className="text-gray-500">No articles found. Add some to the JSON file!</p>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
