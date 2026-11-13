---
tag: HAE36EPKEY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Here are several examples when the sum of squares of $k$ consecutive natural numbers is equal to the sum of squares of $k-1$ following natural numbers:

$$
\begin{aligned}
3^{2}+4^{2} & =5^{2} \\
36^{2}+37^{2}+38^{2}+39^{2}+40^{2} & =41^{2}+42^{2}+43^{2}+44^{2} \\
55^{2}+56^{2}+57^{2}+58^{2}+59^{2}+60^{2} & =61^{2}+62^{2}+63^{2}+64^{2}+65^{2}
\end{aligned}
$$

Find the general formula that covers all such cases.
