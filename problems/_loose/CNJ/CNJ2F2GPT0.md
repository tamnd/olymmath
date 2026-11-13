---
tag: CNJ2F2GPT0
kind: problem
type: answer
answer: "126"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=141222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Given a real number $x$, let $\lfloor x\rfloor$ be the greatest integer less than or equal to $x$. For example, $\lfloor 2.4\rfloor=2,\lfloor 3\rfloor=3$ and $\lfloor\pi\rfloor=3$. Define a sequence $a_{1}, a_{2}, a_{3}, \ldots$ where $a_{1}=n$ and
$$
a_{m}=\left\lfloor\frac{a_{m-1}}{3}\right\rfloor,
$$
for all integers $m \geq 2$. The sequence stops when it reaches zero. The number $n$ is said to be lucky if 0 is the only number in the sequence that is divisible by 3 . For example, 7 is lucky, since $a_{1}=7, a_{2}=2, a_{3}=0$, and none of 7,2 are divisible by 3. But 10 is not lucky, since $a_{1}=10, a_{2}=3, a_{3}=1, a_{4}=0$, and $a_{2}=3$ is divisible by 3 . Determine the number of lucky positive integers less than or equal to 1000 .
