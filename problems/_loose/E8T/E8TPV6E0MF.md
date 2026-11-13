---
tag: E8TPV6E0MF
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call polynomials $A(x) = a_n x^n +. . .+a_1 x+a_0$ and $B(x) = b_m x^m +. . .+b_1 x+b_0$
($a_n b_m \neq 0$) similar if the following conditions hold:
$(i)$ $n = m$;
$(ii)$ There is a permutation $\pi$ of the set $\{ 0, 1, . . . , n\} $ such that $b_i = a_{\pi (i)}$ for each $i \in {0, 1, . . . , n}$.
Let $P(x)$ and $Q(x)$ be similar polynomials with integer coefficients. Given that
$P(16) = 3^{2012}$, find the smallest possible value of $|Q(3^{2012})|$.

*Proposed by Milos Milosavljevic*
