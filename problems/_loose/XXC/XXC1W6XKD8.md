---
tag: XXC1W6XKD8
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the remainder of the division of $2^{2015}$ by 20? Well, it's difficult to perform this division directly using just paper and pen. Let's look for a way to get such an answer by analyzing the remainders of powers of 2 by 20, hoping to find some pattern in them. What is the remainder that $2^{5}$ leaves when divided by 20?

$$
2^{5}=32=1 \cdot 20+12
$$

Knowing this, it's easy to find the remainder of $2^{6}$ when divided by 20, since

$$
2^{6}=2 \cdot 2^{5}=2 \cdot(1 \cdot 20+12)=2 \cdot 20+24
$$

Since 24 is greater than 20 and cannot be a remainder, we should write

$$
2^{6}=3 \cdot 20+4
$$

We can extend the previous argument concluding that to know the remainder of $2^{i+1}$ when divided by 20, it is enough to know the remainder of the product of the remainder of $2^{i}$ when divided by 20. Thus, we can build the sequence of powers and remainders when divided by 20.

$$
\begin{array}{cllllll}
n & 2^{1} & 2^{2} & 2^{3} & 2^{4} & 2^{5} & 2^{6} \\
\text { Remainder by 20 } & 2 & 4 & 8 & 16 & 12 & 4
\end{array}
$$

(a) Determine the remainders that the numbers $2^{7}, 2^{10} \text{ and } 2^{13}$ leave when divided by 20.

(b) Knowing that the remainders repeat periodically, determine the period of repetition, that is, the number of distinct remainders that keep repeating.

(c) We return to the question at the beginning of the problem. What is the remainder that $2^{2015}$ leaves when divided by 20?
