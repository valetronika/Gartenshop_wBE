

// export  const sendCartDataToServer = async () => {
//   if (!phoneNumber) {
//       return;
//   }

//   try {
//       const response = await fetch("/order/send", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//               phoneNumber,
//               cartData: cartStorage,
//           }),
//       });

//       if (response.status === 200) {
//           dispatch(delete_all_products());
//       } else {
//           console.error("Error:", response.status);
//       }
//   } catch (error) {
//       console.error("Error:", error);
//   }

// };