---
tag: P35KVKB4K8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Verify the correctness of the following identities:

1.

$$
\left|\begin{array}{ccc}
a & b & c \\
b+c & c+a & a+b \\
b & c & c & a & a & b
\end{array}\right| \equiv-(a+b+c)(b-c)(c-a)(a-b)
$$

2.

$$
\left|\begin{array}{lll}
b c & a & a^{2} \\
a c & b & b^{2} \\
a b & c & c^{2}
\end{array}\right| \equiv(a-b)(b-c)(c-a)(a b+a c+b c)
$$

3.

$$
\left|\begin{array}{cccc}
1+a & 1 & 1 & 1 \\
1 & 1+b & 1 & 1 \\
1 & 1 & 1+c & 1 \\
1 & 1 & 1 & 1+d
\end{array}\right| \equiv \operatorname{abcd}\left(1+\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{d}\right)
$$
