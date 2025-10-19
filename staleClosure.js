/* 
A stale closure refers to a situation in programming—most commonly in JavaScript,
React, or any language that uses closures—where a closure captures outdated or 
"stale" variables, leading to bugs or unexpected behavior.
 */

// What is a Closure?
// A closure is a function that "remembers" the variables from the scope where it was 
// defined, even if that scope has finished executing.

function outer() {
  let count = 0;
  return function inner() {
    console.log(count);
  };
}

const closure = outer();
closure(); // Logs 0, even though outer() has already finished

// What is a Stale Closure?

// A stale closure happens when:

// A function captures a variable at a certain point in time.

// Later, when the function runs, that variable has changed elsewhere.

// But the function still uses the old (stale) value.


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(count); // 🔴 This might log stale count
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}


// solution
// using useRef & dependency array or schedules a state update setCount(prev => prev + 1);
