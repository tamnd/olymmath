---
tag: 7RQC4MQ8CM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Binhao has a fair coin. He writes the number $+1$ on a blackboard. Then he flips the coin. If it comes up heads (H), he writes $+\frac12$ , and otherwise, if he flips tails (T), he writes $-\frac12$ . Then he flips the coin again. If it comes up heads, he writes $+\frac14$ , and otherwise he writes $-\frac14$ . Binhao continues to flip the coin, and on the nth flip, if he flips heads, he writes $+ \frac{1}{2n}$ , and otherwise he writes $- \frac{1}{2n}$ . For example, if Binhao flips HHTHTHT, he writes $1 + \frac12 + \frac14 - \frac18 + \frac{1}{16} -\frac{1}{32} + \frac{1}{64} -\frac{1}{128}$ . The probability that Binhao will generate a series whose sum is greater than $\frac17$ is $\frac{p}{q}$ , where $p$ and $q$ are relatively prime positive integers. Find $p + 10q$.
