import { Dispatch, SetStateAction, useState } from "react";
import { IFolderItems } from "@/utils/interfaces";
import { FolderArrow, FolderIcon } from "@/public/assets/svg";
import { Collapse } from "@mui/material";

function FolderList({
  data,
  level,
  setIsLastCategory,
}: {
  data: IFolderItems[];
  level: number;
  setIsLastCategory: Dispatch<SetStateAction<boolean>>;
}) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const handleFolderClick = () => {
    setIsFolderOpen(!isFolderOpen);
    const clickedFolder = data.find((folder) => folder.id === level);
    const hasChildren = clickedFolder && clickedFolder.children.length > 0;
    setIsLastCategory(!hasChildren);
  };

  return (
    <div className="ml-[10px]">
      <div>
        {data.map((folder, index) => {
          if (folder.id === level) {
            return (
              <div
                onClick={handleFolderClick}
                className="flex h-[24px] items-center cursor-pointer hover:bg-gray-200"
                key={index}
              >
                {folder.children.length > 0 && (
                  <div
                    style={{ rotate: isFolderOpen ? "45deg" : "0deg" }}
                    className="duration-200"
                  >
                    <FolderArrow className="h-[15px]" />
                  </div>
                )}
                <FolderIcon className="h-[15px] mr-[10px]" />
                <p>{folder.name}</p>
              </div>
            );
          }
        })}
      </div>
      {data.map((folder) => {
        if (folder.id === level) {
          return folder.children.map((child, index) => (
            <Collapse key={index} className="ml-[20px]" in={isFolderOpen}>
              <FolderList
                key={index}
                data={data}
                level={child}
                setIsLastCategory={setIsLastCategory}
              />
            </Collapse>
          ));
        }
      })}
    </div>
  );
}

export default FolderList;