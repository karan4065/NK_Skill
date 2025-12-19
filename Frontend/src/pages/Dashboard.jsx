import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const token = localStorage.getItem("adminToken");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("courses");
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!token) {
        setError("No admin token found. Please login.");
        setLoading(false);
        return;
      }

      try {
        const headers = { Authorization: `Bearer ${token}` };

        // Fetch admin info
        const adminRes = await axios.get(
          `${import.meta.env.VITE_APP}/api/admin/me`,
          { headers }
        );

        // Fetch courses, users, and contacts simultaneously
        const [courseRes, userRes, contactRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_APP}/api/admin/courses`, { headers }),
          axios.get(`${import.meta.env.VITE_APP}/api/admin/users`, { headers }),
          axios.get(`${import.meta.env.VITE_APP}/api/admin/contacts`, { headers }),
        ]);
        console.log(contactRes.data);

        setAdmin(adminRes.data.admin);
        setCourses(Array.isArray(courseRes.data) ? courseRes.data : courseRes.data.courses || []);
        setUsers(Array.isArray(userRes.data) ? userRes.data : userRes.data.users || []);
        setContacts(Array.isArray(contactRes.data.contacts) ? contactRes.data.contacts : []);
        setLoading(false);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        localStorage.removeItem("adminToken");
        setError("Session expired or API error. Please login again.");
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  if (loading) return <h2 style={styles.loading}>Loading Dashboard...</h2>;

  if (error)
    return (
      <div style={styles.center}>
        <h2>{error}</h2>
        <button style={styles.loginBtn} onClick={() => navigate("/adminlogin")}>
          Go to Login
        </button>
      </div>
    );

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2>Admin Dashboard</h2>
        <div>
          <span style={styles.adminName}>👋 {admin?.username}</span>
          <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        {["courses", "users", "contacts"].map(tab => (
          <button
            key={tab}
            style={activeTab === tab ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* COURSES */}
      {activeTab === "courses" && (
        <Section title="Student Enrollments">
          {courses.length === 0 ? <p>No courses found.</p> :
            courses.map(c => (
              <Card key={c._id}>
                <Info label="Student ID" value={c.studentId} />
                <Info label="Name" value={c.fullName} />
                <Info label="Email" value={c.emailId} />
                <Info label="Course" value={c.courseName} />
                <Info label="College" value={c.collegeName} />
                <Info label="Payment" value={c.paymentStatus} status />
              </Card>
            ))
          }
        </Section>
      )}

      {/* USERS */}
      {activeTab === "users" && (
        <Section title="Registered Users">
          {users.length === 0 ? <p>No users found.</p> :
            users.map(u => (
              <Card key={u._id}>
                <Info label="Name" value={u.name} />
                <Info label="Email" value={u.email} />
                <Info label="Joined" value={new Date(u.createdAt).toLocaleDateString()} />
              </Card>
            ))
          }
        </Section>
      )}

      {/* CONTACTS */}
      {activeTab === "contacts" && (
        <Section title="Contact Messages">
          {contacts.length === 0 ? <p>No contacts found.</p> :
            contacts.map(c => (
              <Card key={c._id}>
                <Info label="Name" value={c.fullName} />
                <Info label="Email" value={c.email} />
                <p style={styles.messageBox}>{c.message}</p>
                <small style={styles.date}>
                  {new Date(c.createdAt).toLocaleString()}
                </small>
              </Card>
            ))
          }
        </Section>
      )}
    </div>
  );
};

/* 🔹 Reusable Components */
const Section = ({ title, children }) => (
  <>
    <h3 style={styles.sectionTitle}>{title}</h3>
    <div style={styles.cardContainer}>{children}</div>
  </>
);

const Card = ({ children }) => <div style={styles.card}>{children}</div>;

const Info = ({ label, value, status }) => (
  <p>
    <strong>{label}:</strong>{" "}
    <span style={status ? styles.status(value) : {}}>{value}</span>
  </p>
);

/* 🎨 Styles */
const styles = {
  container: {
    padding: "30px",
    background: "#f1f5f9",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    color: "#fff",
    padding: "20px 30px",
    borderRadius: "12px",
    marginBottom: "25px",
  },
  adminName: { marginRight: "15px", fontWeight: "600" },
  logoutBtn: {
    background: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  tabs: { display: "flex", gap: "15px", marginBottom: "20px" },
  tab: {
    padding: "10px 22px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#e5e7eb",
  },
  activeTab: {
    padding: "10px 22px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
  },
  sectionTitle: { marginBottom: "15px", color: "#1e293b" },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  },
  messageBox: {
    marginTop: "10px",
    padding: "12px",
    background: "#f8fafc",
    borderRadius: "8px",
    color: "#334155",
  },
  date: { color: "#64748b" },
  status: (v) => ({
    color: v === "Paid" ? "green" : v === "Pending" ? "orange" : "red",
    fontWeight: "bold",
  }),
  loading: { textAlign: "center", marginTop: "50px" },
  loginBtn: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  center: { textAlign: "center", marginTop: "50px" },
};

export default Dashboard;
