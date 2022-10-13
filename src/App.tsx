import React from "react";
import "styles/index.css";

//@ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment/locale/vi";

function App() {
  const [startDate, setStartDate] = React.useState(new Date());
  const moc1Ngay = moment(startDate).add(1, "day").format("LL");
  const moc3Ngay = moment(startDate).add(3, "day").format("LL");
  const moc1Tuan = moment(startDate).add(7, "day").format("LL");
  const moc1Thang = moment(startDate).add(30, "day").format("LL");
  const [numberUnit, setNumberUnit] = React.useState<number | string>();
  const [nameUnit, setNameUnit] = React.useState<string>();
  const [showResult, setShowResult] = React.useState<boolean>(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (numberUnit && nameUnit) {
      setShowResult(true);
    }
  };
  return (
    <div className="App bg-yellow-100 flex justify-center p-4" style={{ height: "100vh" }}>
      <div className="max-w-lg">
        <h1 className="font-body-bold text-xl text-center text-blue-900 mb-5">Tính ngày ôn tập lại</h1>
        <div>
          <form className="flex flex-col">
            <div className="flex items-center mb-2">
              <label style={{ minWidth: "7rem" }}>
                <span className="text-red-600">*</span>Unit số:{" "}
              </label>
              <input
                type="number"
                name="numberUnit"
                onChange={(e) => setNumberUnit(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="flex items-center mb-2">
              <label style={{ minWidth: "7rem" }}>
                <span className="text-red-600">*</span>Tên unit:{" "}
              </label>
              <input type="text" name="nameUnit" onChange={(e) => setNameUnit(e.target.value)} className="flex-1" />
            </div>
            <div className="flex items-center mb-5">
              <label style={{ minWidth: "7rem" }}>Ngày học xong</label>
              <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} />
            </div>
            <button className="px-4 py-2 bg-yellow-500 shadow-md mb-5" onClick={(e) => handleSubmit(e)}>
              Tra cứu
            </button>
          </form>

          {showResult && (
            <div className="p-3 bg-yellow-300 shadow-md rounded-md">
              <div>
                <p className="text-center text-xl font-body-bold">
                  Unit {numberUnit} : {nameUnit}
                </p>
              </div>
              <h1 className="text-blue-700 text-lg mb-3">Bạn nên ôn lại vào khoảng thời gian sau :</h1>
              <p className="mb-3 flex items-center justify-between">
                Mốc 1 (sau 1 ngày) : <span className="py-1 px-2 bg-green-200 flex-1"> {moc1Ngay}</span>
              </p>
              <p className="mb-3 flex items-center justify-between">
                Mốc 2 (sau 3 ngày) : <span className="py-1 px-2 bg-green-300 flex-1">{moc3Ngay}</span>
              </p>
              <p className="mb-3 flex items-center justify-between">
                Mốc 3 (sau 1 tuần): <span className="py-1 px-2 bg-green-400 flex-1">{moc1Tuan} </span>
              </p>
              <p className="mb-3 flex items-center justify-between">
                Mốc 4 (sau 1 tháng) : <span className="py-1 px-2 bg-green-500 flex-1">{moc1Thang}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
