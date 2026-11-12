---
tag: 7M2JGXWW1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h508658
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
For every pair of reals $0 < a < b < 1$ , we define sequences $\{x_n\}_{n \ge 0}$ and $\{y_n\}_{n \ge 0}$ by $x_0 = 0$ , $y_0 = 1$ , and for each integer $n \ge 1$ : \begin{align*}
x_n & = (1 - a) x_{n - 1} + a y_{n - 1},
y_n & = (1 - b) x_{n - 1} + b y_{n - 1}.
\end{align*} The *supermean* of $a$ and $b$ is the limit of $\{x_n\}$ as $n$ approaches infinity. Over all pairs of real numbers $(p, q)$ satisfying $\left (p - \frac{1}{2} \right)^2 + \left (q - \frac{1}{2} \right)^2 \le \left( \frac{1}{10}\right)^2$ , the minimum possible value of the supermean of $p$ and $q$ can be expressed as $ \frac{m}{n}$ for relatively prime positive integers $m$ and $n$ . Compute $100m + n$ .

*Proposed by Lewis Chen*
