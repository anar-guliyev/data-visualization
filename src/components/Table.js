import React from "react";
import "./table.css";
import { FixedSizeList as List } from "react-window";

export const Table = ({ data, columns, loading }) => {
  return (
    <div className="table-responsive">
      <div className="table-head">
        {columns.map((item, key) => (
          <div
            className={item.className ? item.className : ""}
            key={key}
            style={{ width: `${100 - columns.length}%` }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="table-body">
        {loading && (
          <div className="d-flex">
            <span className="loader"></span>
          </div>
        )}
        <List
          height={window?.innerHeight - 38}
          width={window?.innerWidth}
          itemCount={data?.length}
          itemSize={window?.innerHeight < 1024 ? 95 : 60}
        >
          {({ index, style }) => {
            return (
              <div className="table-row" style={style} key={index}>
                {columns.map((column, key) => (
                  <div
                    data-content={column.name}
                    className="table-cell"
                    key={key}
                    style={{
                      width:
                        window?.innerHeight < 1024
                          ? "100%"
                          : `${100 - columns.length}%`,
                    }}
                  >
                    {window?.innerHeight < 1024 ? (
                      <span>{column["name"]}:</span>
                    ) : (
                      ""
                    )}
                    {column?.render
                      ? column.render(
                          column.key === "all"
                            ? data[index]
                            : data[index][column.key]
                        )
                      : data[index][column.key] || "-"}
                  </div>
                ))}
              </div>
            );
          }}
        </List>
      </div>
    </div>
  );
};
