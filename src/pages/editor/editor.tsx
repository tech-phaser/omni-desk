import EditorLeft from "../../components/pageComponents/editor/editor-left";
import EditorRight from "../../components/pageComponents/editor/editor-right";

const Editor = () => {
  return (
    <div className="grid h-screen grid-cols-12 gap-2 px-2 py-2">
      <div className="col-span-2 rounded-xl bg-secondary">
        <EditorLeft />
      </div>
      <div className="col-span-10 rounded-xl bg-primary">
        <EditorRight />
      </div>
    </div>
  );
};

export default Editor;
