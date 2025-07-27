.pagination {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 20px 0;
  gap: 10px;
  flex-wrap: wrap;
}

.pagination li {
  border: 1px solid #ccc;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pagination li:hover {
  background-color: #f0f0f0;
}

.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
