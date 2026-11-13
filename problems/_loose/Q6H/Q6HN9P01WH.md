---
tag: Q6HN9P01WH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73549
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An interesting property of the number 2013 is that 3 is the last digit of the sum $2+0+1$. Repeating this process, that is, writing the last digit of the sum of the three previous digits to the right, we get a sequence:

$$
2,0,1,3,4,8,5,7 \ldots
$$

a) Prove that starting with the sequence 2,0,1, in this order, we can also find the three consecutive numbers $1,2,2$, in this order.

b) Observe that if a sequence of three consecutive numbers appears again in the same order, then the entire sequence will "repeat" successively. For example, the sequence below is not the sequence from the statement, but it repeats every four numbers

$$
\ldots \underline{124312431243 \ldots 12431243 \ldots}
$$

Verify that some sequence of three digits repeats in the sequence from the statement.
c) Suppose that in the first appearance of " $a, b, c$ " in the sequence, the number immediately preceding it is $x$, and that in its second appearance it is $y$, that is, in the sequence we will find the numbers in the following order:

$$
\ldots, x, a, b, c, \ldots, y, a, b, c \ldots
$$

Show that $x=y$.

d) Given that 1,2,2 appeared in the sequence, in this order, show that eventually the sequence of digits $2,0,1$ will appear again, also in this order.
