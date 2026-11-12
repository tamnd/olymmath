---
tag: E410BHQEJN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Which of the functions

$$
\begin{aligned}
& \varphi(t)=\exp \left(-|t|^{\alpha}\right), \alpha \in(0,2], \\
& \varphi(t)=\exp \left(-|t|^{\alpha}\right), \alpha>2, \\
& \varphi(t)=\frac{1}{\left(1+|t|^{\alpha}\right)^{\beta}}, \alpha \in(0,2], \beta>0 \\
& \varphi(t)=\frac{1}{\left(1+|t|^{\alpha}\right)^{\beta}}, \alpha>2, \beta>0 \\
& \varphi(t)=\left\{\begin{array}{ll}
(1-|t|)^{\beta}, & |t| \leqslant 1, \\
0, & |t|>1,
\end{array} \beta \geqslant 1,\right. \\
& \varphi(t)=\left\{\begin{array}{ll}
(1-|t|)^{\beta}, & |t| \leqslant 1, \\
0, & |t|>1,
\end{array} \beta \in(0,1)\right. \\
& \varphi(t)= \begin{cases}1-|t|^{3}, & |t| \leqslant 1 \\
0, & |t|>1,\end{cases} \\
& \varphi(t)= \begin{cases}1-|t|, & |t| \leqslant 1 / 2 \\
1 /(4|t|), & |t|>1 / 2\end{cases}
\end{aligned}
$$

are characteristic?
