---
tag: 4HWHE70N8N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=70878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P(x)$ and $Q(x)$ be polynomials, where $Q(x)$ is not identically zero and $P(x)$ is not divisible by $Q(x)$. Prove that for some $s \geq 1$, there exist polynomials $A_{0}(x), A_{1}(x), \ldots, A_{s}(x)$ and $R_{1}(x), \ldots, R_{s}(x)$ such that $\operatorname{deg} Q(x) >$ $\operatorname{deg} R_{1}(x) > \operatorname{deg} R_{2}(x) > \ldots > \operatorname{deg} R_{s}(x) \geq 0$

$$
\begin{aligned}
& P(x)=Q(x) A_{0}(x)+R_{1}(x), \\
& Q(x)=R_{1}(x) A_{1}(x)+R_{2}(x), \\
& R_{1}(x)=R_{2}(x) A_{2}(x)+R_{3}(x), \\
& \ldots \\
& R_{s-2}(x)=R_{s-1}(x) A_{s-1}(x)+R_{s}(x), \\
& R_{s-1}(x)=R_{s}(x) A_{s}(x) \\
& \text { and }(P(x), Q(x))=R_{s}(x) .
\end{aligned}
$$
