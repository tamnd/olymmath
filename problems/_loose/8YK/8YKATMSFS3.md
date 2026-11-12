---
tag: 8YKATMSFS3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37607
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35704
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1996
    source: hf-ai-mo-aops
    label: 1996 China Team Selection Test
---
Let $\alpha_1, \alpha_2, \dots, \alpha_n$ , and $\beta_1, \beta_2, \ldots, \beta_n$ , where $n \geq 4$ , be 2 sets of real numbers such that
$$\sum_{i=1}^{n} \alpha_i^2 < 1 \text{and} \sum_{i=1}^{n} \beta_i^2 < 1.$$
Define
\begin{align*}
A^2 &= 1 - \sum_{i=1}^{n} \alpha_i^2,
B^2 &= 1 - \sum_{i=1}^{n} \beta_i^2,
W &= \frac{1}{2} (1 - \sum_{i=1}^{n} \alpha_i \beta_i)^2.
\end{align*}
Find all real numbers $\lambda$ such that the polynomial $$x^n + \lambda (x^{n-1} + \cdots + x^3 + Wx^2 + ABx + 1) = 0,$$ only has real roots.
