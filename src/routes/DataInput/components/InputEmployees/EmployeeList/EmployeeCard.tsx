function EmployeeCard({ props }: any) {
  const { name, workDays, positionsArr } = props;

  return (
    <span className="EmployeeCard">
      <span className="name">{name}</span>
      <span className="workdays">{workDays}</span>
      {positionsArr ? <span className="positions">
        {positionsArr.map((elem: string, index: number) =>
          index < positionsArr.length - 1 ? elem + ", " : elem
        )}
      </span> : ""}
    </span>
  );
}
export default EmployeeCard;
