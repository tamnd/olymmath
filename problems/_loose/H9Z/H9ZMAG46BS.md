---
tag: H9ZMAG46BS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=43503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$9(!)$. Factorize:
1) $x^{4}-8 x^{2}+4$
2) $4 a^{4}-12 a^{2}+1$
3) $b^{5}+b+1$
4) $a b(a-b)-a c(a+c)+c b(2 a+c-b)$.

Many of the subsequent examples are solved using various substitutions. Let's provide an example.

Using the substitution $x=a^{2}-2$, it is not difficult to transform the following polynomial into a product:

$$
\begin{gathered}
\left(a^{2}+a-2\right)\left(a^{2}-3 a-2\right)+4 a^{2}=(x+a)(x-3 a)+4 a^{2}=x^{2}- \\
-2 a x+a^{2}=(x-a)^{2}=\left(a^{2}-a-2\right)^{2} .
\end{gathered}
$$
