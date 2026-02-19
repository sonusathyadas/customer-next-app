"use client";

import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
  min-height: 50px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid red;
  background-color: lightyellow;
`;


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <StyledDiv onClick={()=>alert('Clicked')}>
          <p>This is Home Page</p>
        </StyledDiv>


        <StyledDiv>
          <p>This is second paragraph</p>
        </StyledDiv>
      </main>
    </div>
  );
}
