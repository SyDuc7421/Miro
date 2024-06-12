import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";
import { Room } from "./_components/room";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardId} Loading={<Loading />}>
      <div className="h-full w-full">
        <Canvas boardId={params.boardId} />
      </div>
    </Room>
  );
};

export default BoardIdPage;
