import "../App.css";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Employees() {
  const [role, setRole] = useState();

  const [employees, setEmpolyees] = useState([
    {
      id: 1,
      name: "Thoeun",
      role: "Dev",
      img: "https://img.freepik.com/free-photo/serious-angry-asian-man-looking-with-dismay-employee-scolding-person-making-stupid-mistake-tap-temple-with-finger-stare-frustrated-standing-white-background-upset_1258-55718.jpg?w=996&t=st=1696958046~exp=1696958646~hmac=dc3523716cd155d6d0ceb17789e6639195302ccb8adfc5684f7d1863323cdd79",
    },
    {
      id: 2,
      name: "Davy",
      role: "Sale",
      img: "https://img.freepik.com/free-photo/image-smiling-asian-woman-hugging-credit-card-buying-contactless-standing-white-tshirt-white-background_1258-91528.jpg?w=826&t=st=1696958541~exp=1696959141~hmac=4ff3427e3ad331f7dd4e33c6bf50a62ea4437eba09a0256394490f18fbaac23f",
    },
    {
      id: 3,
      name: "Andy",
      role: "Youtuber",
      img: "https://img.freepik.com/free-photo/close-up-portrait-happy-smiling-romantic-tender-african-american-woman-enjoying-listening-music-headphones-tilt-head-close-eyes-dreamy-grinning-delighted-blue-wall_1258-35460.jpg?w=826&t=st=1696958564~exp=1696959164~hmac=f37821d5d04503eeee7e21d731caddb8b13571b58fb62ea8a9d0515b120198fb",
    },
    {
      id: 4,
      name: "Keo",
      role: "Dev",
      img: "https://img.freepik.com/free-photo/smart-attractive-asian-glasses-male-standing-smile-with-freshness-joyful-casual-blue-shirt-portrait-white-background_609648-1226.jpg?w=740&t=st=1696958622~exp=1696959222~hmac=92f56e442ea2f849d3d8efb504fbf41944ab8a209276fa03bda9d0e9435270a6",
    },
    {
      id: 5,
      name: "Rathar",
      role: "Dev",
      img: "https://img.freepik.com/free-photo/lady-posing-while-standing-t-shirt_176474-40855.jpg?w=826&t=st=1696958643~exp=1696959243~hmac=e89835b40e610a57ceb7f81147d5fca1f39a610df2b6171bbabf1a8d6e616f92",
    },
    {
      id: 6,
      name: "Jone",
      role: "Dev",
      img: "https://img.freepik.com/free-photo/blonde-beautiful-girl-is-looking-away-by-sitting-bench-stone-background_176474-120080.jpg?w=826&t=st=1696958665~exp=1696959265~hmac=280db29425d4fcaf4797015ae40cdec8cf8a41e79838ed0c83604bc154ed423b",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole }
      }
      return employee
    });
    setEmpolyees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    }
    setEmpolyees([...employees, newEmployee]);
  }


  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
         

          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
           })}
          </div>

          <AddEmployee newEmployee={ newEmployee } />
        </>
      ) : (
        <p> You cannot see Employee</p>
      )}
    </div>

  );
}

export default Employees;
