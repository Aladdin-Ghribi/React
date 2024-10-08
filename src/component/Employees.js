import EditEmployees from "../component/EditEmployees";


function Employee(props) {
  return (
    <div className="py-8 px-8 max-w-sm m-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="h-20 w-20 object-cover rounded-full"
        src={props.img}
        alt="Woman's Face"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-500 font-medium">{props.role}</p>
        </div>
        <EditEmployees/>
      </div>
    </div>
  );
}
export default Employee;
