---
tag: EQ3TQE5R70
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any real number $x,\lfloor x\rfloor$ denotes the largest integer less than or equal to $x$. For example, $\lfloor 4.2\rfloor=4$ and $\lfloor-2.4\rfloor=-3$. That is, $\lfloor x\rfloor$ is the integer that satisfies the inequality $\lfloor x\rfloor \leq x<\lfloor x\rfloor+1$.

(a) The equation $x^{2}=3\lfloor x\rfloor+1$ has two solutions. One solution is $x=\sqrt{7}$. The second solution is of the form $x=\sqrt{a}$ for some positive integer $a$. Determine the value of $a$.

(b) For each positive integer $n$, determine all possible integer values of the expression $x^{2}-3\lfloor x\rfloor$, where $x$ is a real number with $\lfloor x\rfloor=n$.

(c) For each integer $k$ with $k \geq 0$, determine all real numbers $x$ for which $x^{2}=3\lfloor x\rfloor+\left(k^{2}-1\right)$.
