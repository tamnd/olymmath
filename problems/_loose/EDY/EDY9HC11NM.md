---
tag: EDY9HC11NM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Maximum Groups. (From 9th grade, 4 points) Imitating random processes is difficult for humans. Even a series of coin tosses is almost impossible to invent "from the head." One of the reasons is that in a long series, a person subconsciously tries to avoid "too many" heads or tails in a row. In a truly random series, quite long groups consisting only of heads or only of tails usually occur. For example, in 100 coin tosses, it is more likely (with a probability of about 0.54) that there will be 7 heads or 7 tails in a row, and the expected value of the length of the longest such group is approximately 6.98.

If a coin lands on the same side $k$ times in a row, we will call such a subsequence a group of length $k$. For example, in the sequence HHTTHTTT, there are four groups, the lengths of which are $1, 3, 2,$ and 2.

Let $p_{n, k}$ be the probability that in a series of $n$ tosses of a fair coin, there is a group of length $k$ or more ($k < n$). Derive the recurrence formula

$$
p_{n, k}=p_{n-1, k}-\frac{1}{2^{k}} p_{n-k, k}+\frac{1}{2^{k}}
$$
