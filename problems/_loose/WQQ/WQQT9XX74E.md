---
tag: WQQT9XX74E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24738
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the elements of Pascal's triangle can be calculated by the formula

$$
C_{n}^{k}=\frac{n!}{k!(n-k)!}
$$

( $n$ ! denotes the product $1 \cdot 2 \cdot 3 \ldots(n-1) \cdot n$ ; the symbol $0!$, which generally has no meaning, is conventionally understood to be 1$)$.

Note that if $k<p$ and $n-k<p$, then $k$ ! and ( $n-k$ )! are not equal to zero in $p$-arithmetic. Consequently, in this case, division by $k!(n-k)!$ is possible in $p$-arithmetic, and the equality established in the problem remains valid even under the $p$-arithmetic interpretation, i.e.,

$$
\left.P_{n}^{k}=\frac{n!}{k!(n-k)!} 1\right)
$$
