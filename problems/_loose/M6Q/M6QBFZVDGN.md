---
tag: M6QBFZVDGN
kind: problem
type: answer
answer: \frac{1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Problem of the Four Liars. It is known that each of the four people $A, B, C$, and $D$ tells the truth only one time out of three. If $A$ states that $B$ denies that $C$ claims that $D$ lied, then what is the probability that $D$ actually told the truth?

Note. It is naturally assumed in the problem that $C$ definitely knew whether $D$ told the truth or lied, and that if $A$ or $B$ lie, it means that $B$, respectively $C$, claimed the opposite of what $A$ or $B$ attribute to them.

This problem can also be formulated as follows. Suppose $D$ writes a plus or minus sign on a piece of paper and shows it from a distance. $C$; $C$ copies the sign and shows it to $B$; $B$ copies the sign and shows it to $A$; finally, $A$ copies the sign from $B$. It is known that $D$ writes a plus sign only one time out of three; further, for $C, B$, and $A$, the probability of not making a mistake when copying is $1/3$ (i.e., they copy correctly only one time out of three). Suppose the sign copied by $A$ turned out to be a plus sign. What is the probability that $D$ also wrote a plus sign 1)?

Similar questions play a significant role in certain technical issues; they are also related to an important branch of modern probability theory (so-called Markov chains; see the note at the end of the solution).
