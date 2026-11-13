---
tag: 2CX8CHR21F
kind: problem
type: answer
answer: \frac{a_n}{a_n + b_n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When a fair coin tossed, if the Heads shows up, then the array of letters $AA$ is written, if the Tail shows up, then the letter $B$ is written.
Continued to tossing the coin repeatedly, in accordance with the same rule, $AA,\ B$ are written by connecting in the right hand of the array which has already existed.
For example, when the fair coin is tossed five times, if the outcomes are $H,\ T,\ T,\ H,\ T$ in this order, then we have the array of the letters $AABBAAB$. The fourth letter from the left is $B$ and fifth letter is $A$.

(1) Let $n$ be a positive integer. When we make array of letters by $n$ tossing the coin, find the probability such that the $n$-th letter from the left hand of the array of letters is $A$.

(2)Let $n\geq 2$ be an integer. When we make array of letters by $n$ tossing the coin, find the probability such that the $(n-1)$-th letter from the left hand of the array of letters is $A$ and the $n$-th letter is $B$.
