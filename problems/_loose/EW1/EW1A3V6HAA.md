---
tag: EW1A3V6HAA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set of consecutive integers is balanced if it can be divided into two subsets with the same number of elements, such that:

1) the two subsets have no elements in common;
2) the sum of the elements of one of the subsets is equal to the sum of the elements of the other;
3) the sum of the squares of the elements of one of the subsets is equal to the sum of the squares of the elements of the other.

For example, the set $\{7,8,9,10,11,12,13,14\}$ is balanced, as we can divide it into the subsets $\{7,10,12,13\}$ and $\{8,9,11,14\}$, and

$$
\begin{aligned}
& 7+10+12+13=8+9+11+14 \\
& 7^{2}+10^{2}+12^{2}+13^{2}=8^{2}+9^{2}+11^{2}+14^{2}
\end{aligned}
$$

a) Verify that the set $\{1,2,3,4,5,6,7,8\}$ is balanced.

b) Show that any set of eight consecutive integers is balanced.

c) Show that no set of four consecutive integers is balanced.
