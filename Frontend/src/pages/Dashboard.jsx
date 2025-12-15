import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const token = localStorage.getItem("adminToken");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("courses");
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState("");
const navigate=useNavigate()
  // Fetch admin & dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!token) {
        setError("No admin token found. Please login.");
        setLoading(false);
        return;
      }

      try {
        const headers = { Authorization: `Bearer ${token}` };
        const adminRes = await axios.get(
          "http://localhost:4000/api/admin/me",
          { headers }
        );
        setAdmin(adminRes.data.admin);

        const [courseRes, userRes] = await Promise.all([
          axios.get("http://localhost:4000/api/admin/courses", { headers }),
          axios.get("http://localhost:4000/api/admin/users", { headers }),
        ]);

        setCourses(courseRes.data);
        setUsers(userRes.data);
        setLoading(false);
      } catch (err) {
        localStorage.removeItem("adminToken");
        setError("Invalid token. Please login again.");
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
  navigate("/")
  };

  if (loading)
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;

  if (error)
    return (
      <div style={styles.center}>
        <h2>{error}</h2>
        <button onClick={() => (window.location.href = "/adminlogin")} style={styles.loginBtn}>
          Go to Login
        </button>
      </div>
    );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2>Welcome, {admin?.username}</h2>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={activeTab === "courses" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("courses")}
        >
          Enrollments
        </button>
        <button
          style={activeTab === "users" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
      </div>

      {/* Content */}
      {activeTab === "courses" && (
        <div>
          <h3 style={styles.sectionTitle}>Student Enrollments</h3>
          <div style={styles.cardContainer}>
            {courses.map((c) => (
              <div key={c._id} style={styles.card}>
                <p><strong>Student ID:</strong> {c.studentId}</p>
                <p><strong>Name:</strong> {c.fullName}</p>
                <p><strong>Email:</strong> {c.emailId}</p>
                <p><strong>Mobile:</strong> {c.mobileNumber}</p>
                <p><strong>Course:</strong> {c.courseName}</p>
                <p><strong>College:</strong> {c.collegeName}</p>
                <p><strong>Year/Sem:</strong> {c.yearSemester}</p>
                <p>
                  <strong>Payment:</strong>{" "}
                  <span
                    style={{
                      color:
                        c.paymentStatus === "Paid"
                          ? "green"
                          : c.paymentStatus === "Pending"
                          ? "orange"
                          : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {c.paymentStatus}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "users" && (
        <div>
          <h3 style={styles.sectionTitle}>Registered Users</h3>
          <div style={styles.cardContainer}>
            {users.map((u) => (
              <div key={u._id} style={styles.card}>
                <p><strong>Name:</strong> {u.name}</p>
                <p><strong>Email:</strong> {u.email}</p>
                <p><strong>Joined:</strong> {new Date(u.createdAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* 🎨 Styles */
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif",
    background: "#f4f6f8",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1e293b",
    color: "#fff",
    padding: "15px 25px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  logoutBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "6px",
    fontWeight: "bold",
  },
  tabs: {
    display: "flex",
    gap: "15px",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 25px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#e5e7eb",
    fontWeight: "500",
    transition: "0.3s",
  },
  activeTab: {
    padding: "10px 25px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
    fontWeight: "600",
    transition: "0.3s",
  },
  sectionTitle: {
    marginBottom: "15px",
    color: "#1e293b",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "15px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "0.3s",
  },
  loginBtn: {
    padding: "10px 20px",
    marginTop: "20px",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
  center: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default Dashboard;
