---
tag: YJYE38NRT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Constructing the table for a tournament where all $n$ teams face each other over $n-1$ rounds (such as in each round of the Brazilian Championship) is a fairly elaborate mathematical problem with several methods of solution. In this question, we will explore one of these approaches.

Let's consider a tournament with 6 teams. We will associate the numbers 1, 2, 3, 4, 5, and $\infty$ (infinity) with each of the teams. The first round of the tournament is $1 \times \infty, 2 \times 5, 3 \times 4$. To construct round $i$, we add $i-1$ to each number involved in the matches of the initial round, considering that

- when the sum exceeds 5, we subtract 5 from the result;
- $\infty$ added to any positive integer is $\infty$. For example, the second round will be:

$$
\begin{gathered}
(1+1) \times(\infty+1), \text { that is, } 2 \times \infty \\
(2+1) \times(5+1) \text {, that is, } 3 \times 1 \\
(3+1) \times(4+1) \text {, that is, } 4 \times 5
\end{gathered}
$$

(a) Determine the remaining 3 rounds of the tournament, following the method described above.

(b) Using the procedure shown, display the 7 rounds of a tournament with 8 teams.
