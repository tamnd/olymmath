---
tag: TC8NWQ20EA
kind: problem
type: answer
answer: 1-(\frac{5}{6})^{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
What is the probability of rolling at least one 6 in 6 throws of a die?

Notation 2. We denote $n$ ! and call "factorial n" the value of $1 \times 2 \times \cdots \times n . n$ ! corresponds to the number of ways to order $n$ elements. By convention, $0!=1$.

Example 4. There are 52 ! possible shuffles of a deck of 52 cards.

Notation 3. We denote $A_{n}^{p}$ the value of $\frac{n!}{(n-p)!} \cdot A_{n}^{p}$ corresponds to the number of ways to choose $p$ different elements in an ordered manner from $n$ elements.

Example 5. There are $A_{52}^{5}$ possible stacks of 5 cards.

Notation 4. We denote $C_{n}^{p}$ or $\binom{n}{p}$ (read "p among $\left.n "\right)$ the value $\frac{n!}{p!(n-p)!} \cdot\binom{n}{p}$ corresponds to the number of possible choices of $p$ different elements from $n$ elements in an unordered manner.

Example 6. There are ( $\binom{52}{5}$ possible poker hands (of five cards).

Proposition 7. $\binom{n}{p}=\binom{n}{n-p} \binom{n}{p}=\binom{n-1}{p-1}+\binom{n-1}{p}$.

Proof 8. Indeed, choosing $p$ elements from $n$ is equivalent to choosing the $n-p$ other elements and then deciding to take those that were not chosen. Then, to choose $p$ elements from $n$, either we choose the last element and $p-1$ elements from the $n-1$ first elements, or we do not choose the last element and choose $p$ elements from the $n-1$ first elements.
