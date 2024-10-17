const fetchDepartments = async () => {
  try {
    const response = await fetch("/departments.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch departments:", error);
    throw error;
  }
};

export default fetchDepartments;
