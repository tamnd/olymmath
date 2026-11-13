---
tag: 9FTBEC6FB6
kind: problem
type: answer
answer: \frac{1}{4(2p+1)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the calculation of the square root of a number $z=p^{2}+a$ with $0 \leq a \leq 2 p+1$, the approximation formula is

$$
\sqrt{z}=\sqrt{p^{2}+a} \approx p+\frac{a}{2 p+1}
$$

How large is the maximum error of this approximation in dependence on $a$? How does this change in dependence on $p$?
