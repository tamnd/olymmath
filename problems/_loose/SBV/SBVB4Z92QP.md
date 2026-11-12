---
tag: SBVB4Z92QP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055666
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19275
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Let $x_0$ , $x_1$ , $\ldots$ , $x_{1368}$ be complex numbers. For an integer $m$ , let $d(m)$ , $r(m)$ be the unique integers satisfying $0\leq r(m) < 37$ and $m = 37d(m) + r(m)$ . Define the $1369\times 1369$ matrix $A = \{a_{i,j}\}_{0\leq i, j\leq 1368}$ as follows: $$ a_{i,j} =
\begin{cases}
x_{37d(j)+d(i)} & r(i) = r(j),\ i\neq j
-x_{37r(i)+r(j)} & d(i) = d(j),\ i \neq j
x_{38d(i)} - x_{38r(i)} & i = j
0 & \text{otherwise}
\end{cases}.
$$We say $A$ is $r$ -\emph{murine} if there exists a $1369\times 1369$ matrix $M$ such that $r$ columns of $MA-I_{1369}$ are filled with zeroes, where $I_{1369}$ is the identity $1369\times 1369$ matrix. Let $\operatorname{rk}(A)$ be the maximum $r$ such that $A$ is $r$ -murine. Let $S$ be the set of possible values of $\operatorname{rk}(A)$ as $\{x_i\}$ varies. Compute the sum of the $15$ smallest elements of $S$ .

*Proposed by Brandon Wang*
