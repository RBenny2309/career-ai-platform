export const loginUser = async (data) => {
  // TEMP MOCK LOGIN: Simulates a 500ms network request
  return new Promise((resolve) => {
    setTimeout(() => {
      // Default role is student
      let assignedRole = "student";
      
      // Check if the user typed "parent" or "mentor" in the email field
      const emailInput = data?.email?.toLowerCase() || "";
      if (emailInput.includes("parent")) assignedRole = "parent";
      if (emailInput.includes("mentor")) assignedRole = "mentor";

      resolve({
        token: `mock-token-${assignedRole}-123`,
        role: assignedRole,
      });
    }, 500);
  });
};