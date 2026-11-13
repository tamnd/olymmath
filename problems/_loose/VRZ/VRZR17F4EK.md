---
tag: VRZR17F4EK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
12、(18 points) The Ye School Mathematics Enthusiast Group consists of $m$ students, and the school has specially assigned $n$ teachers as advisors. In this group,

安排每名教师指导若干名学生, 且每名学生都由一位教师指导. 为了使每位教师指导的学生人数尽可能均衡, 学校决定采用以下方案:

Arrange for each teacher to guide several students, and ensure that each student is guided by one teacher. To make the number of students each teacher guides as balanced as possible, the school has decided to adopt the following plan:

(1) 如果 $m$ 能被 $n$ 整除, 则每位教师指导 $\frac{m}{n}$ 名学生.

(1) If $m$ is divisible by $n$, then each teacher will guide $\frac{m}{n}$ students.

(2) 如果 $m$ 不能被 $n$ 整除, 则将学生分成两组, 一组由 $\left\lfloor \frac{m}{n} \right\rfloor$ 名学生组成, 另一组由 $\left\lceil \frac{m}{n} \right\rceil$ 名学生组成. 其中, $\left\lfloor x \right\rfloor$ 表示不大于 $x$ 的最大整数, $\left\lceil x \right\rceil$ 表示不小于 $x$ 的最小整数.

(2) If $m$ is not divisible by $n$, then divide the students into two groups, one with $\left\lfloor \frac{m}{n} \right\rfloor$ students and the other with $\left\lceil \frac{m}{n} \right\rceil$ students. Here, $\left\lfloor x \right\rfloor$ denotes the greatest integer not greater than $x$, and $\left\lceil x \right\rceil$ denotes the smallest integer not less than $x$.

(3) 每位教师指导的学生人数为 $\left\lfloor \frac{m}{n} \right\rfloor$ 或 $\left\lceil \frac{m}{n} \right\rceil$.

(3) The number of students each teacher guides will be either $\left\lfloor \frac{m}{n} \right\rfloor$ or $\left\lceil \frac{m}{n} \right\rceil$.

(4) 请证明: 采用上述方案后, 每位教师指导的学生人数之差不超过 1.

(4) Please prove: After adopting the above plan, the difference in the number of students each teacher guides will not exceed 1.
