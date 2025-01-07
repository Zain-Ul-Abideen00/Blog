"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { RoomProvider, useThreads } from "@liveblocks/react/suspense";
import { Composer, Thread } from "@liveblocks/react-ui";
import { ClientSideSuspense } from "@liveblocks/react";
import { ErrorBoundary } from "react-error-boundary";
import { Loading } from "./Loading";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-ui/styles/dark/media-query.css";

/**
 * Displays a list of threads, along with a composer for creating
 * new threads.
 */

function Example() {
  const { threads } = useThreads();

  return (
    <main className="flex flex-col gap-4 p-16 mx-auto max-w-[680px] min-w-[320px]">
      {threads.map((thread) => (
        <Thread
          key={thread.id}
          thread={thread}
          className="relative rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04),0_8px_26px_rgba(0,0,0,0.06)] 
          dark:after:content-[''] dark:after:absolute dark:after:inset-0 dark:after:w-full dark:after:h-full dark:after:rounded-inherit 
          dark:after:pointer-events-none dark:after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
        />
      ))}
      <Composer
        className="relative rounded-xl overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_6px_rgba(0,0,0,0.04),0_8px_26px_rgba(0,0,0,0.06)]
        dark:after:content-[''] dark:after:absolute dark:after:inset-0 dark:after:w-full dark:after:h-full dark:after:rounded-inherit 
        dark:after:pointer-events-none dark:after:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
      />
    </main>
  );
}

export default function Comments() {
  const roomId = useExampleRoomId("liveblocks:examples:nextjs-comments");

  return (
    <div className="bg-[#f3f3f3] dark:bg-[#111] font-sans [--lb-accent:rgba(228,188,30,0.9)] dark:[--lb-accent:rgba(163,133,13,0.9)]">
      <RoomProvider id={roomId}>
        <ErrorBoundary
          fallback={
            <div className="absolute w-screen h-screen flex items-center justify-center dark:text-white">
              There was an error while getting threads.
            </div>
          }
        >
          <ClientSideSuspense 
            fallback={
              <div className="absolute w-screen h-screen flex items-center justify-center">
                <Loading />
              </div>
            }
          >
            <Example />
          </ClientSideSuspense>
        </ErrorBoundary>
      </RoomProvider>
    </div>
  );
}

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally.
 */
function useExampleRoomId(roomId: string) {
  const params = useSearchParams();
  const exampleId = params?.get("exampleId");

  const exampleRoomId = useMemo(() => {
    return exampleId ? `${roomId}-${exampleId}` : roomId;
  }, [roomId, exampleId]);

  return exampleRoomId;
}
