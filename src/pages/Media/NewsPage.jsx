import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Row, Table } from "react-bootstrap";
import HomeNews from "../../components/HomeNews";
import axios from "axios";
import { BASE_URL, COMPANY_NAME } from "../../constants.js";
import { API_BASE_URL } from "../../constants.js";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; // Items to show per page
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Fetch all the news data at once
  useEffect(() => {
    document.title = "News | " + COMPANY_NAME;
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${API_BASE_URL}all_news`); // Replace with your API endpoint
        setNewsData(response.data); // Assuming the API returns data as { data: [] }
      } catch (err) {
        setError("Error fetching news data");
      }

      setLoading(false);
    };

    fetchNews();
  }, []);

  // Get current page's items
  const currentItems = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handler for changing the page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Generate an array for pagination numbers [1, 2, 3, ..., totalPages]
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <>
      <Header />
      <section className="inner_page_bg_clr">
        <HomeNews />
      </section>
      <section className="inner_page_no_bg">
        <Container>
          <Row>
            <div className="content">
              <h3>All News and Updates</h3>
            </div>
            <div className="table-responsive">
              <Table striped bordered hover responsive>
                <thead>
                  <th className="dateTd">Date</th>
                  <th className="titleTd">Title</th>
                </thead>
                <tbody>
                  {currentItems.map((newsItem) => (
                    <tr>
                      <td>{newsItem.date}</td>
                      <td>
                        <a
                          href={`/Media/NewsDetail/${newsItem.slug}`}
                          target="_blank"
                        >
                          {newsItem.title}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            {/* Pagination Controls */}
            <div className="pagination-controls">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "active" : ""}
                  style={{
                    margin: "0 5px",
                    backgroundColor:
                      currentPage === page ? "lightblue" : "white",
                    border: "1px solid #ccc",
                    padding: "5px 10px",
                  }}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default NewsPage;
