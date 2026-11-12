---
tag: 36YWNYGHZ1
kind: problem
type: answer
answer: \frac{1}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an urn, there are 7 white and 3 black balls. The condition of the experiment is that each drawn ball is returned to the urn. Event $A$: a white ball is drawn in the first trial; event $B$: a white ball is drawn in the second trial. We have $p(A)=p(B)=\frac{7}{10}$ (if the first ball was black, $p(B)$ would still be $\frac{7}{10}$). Therefore, events $A$ and $B$ are independent. In this case, the probability of drawing a white ball both times is $p(A B)=\frac{7}{10} \cdot \frac{7}{10}=\frac{49}{100}$.

If, however, two balls are drawn one after another from the urn and the first ball is not returned to the urn, then the probability that both balls drawn are white is $p(A B)=\frac{7}{10} \cdot \frac{6}{9}=\frac{7}{15}$.
30. Events $A_{1}, \ldots, A_{n}$ are called independent in total if the probability of each of them does not depend on whether or not any of the other events in this set have occurred.

Theorem 3. The probability of the joint occurrence of $n$ events $A_{1}$, $\ldots, A_{n}$ that are independent in total is equal to the product of the probabilities of these events:

$$
p\left(A_{1} A_{2} \ldots A_{n}\right)=p\left(A_{1}\right) p\left(A_{2}\right) \ldots p\left(A_{n}\right)
$$

Theorem 4 (on the probability of the occurrence of at least one of $n$ independent events). Let events $A_{1}, \ldots, A_{n}$ be independent in total (but may be compatible) and $p\left(A_{1}\right)=p_{1}, p\left(A_{2}\right)=p_{2}, \ldots, p\left(A_{n}\right)=p_{n}$. Then

$$
p\left(A_{1}+A_{2}+\ldots+A_{n}\right)=1-q_{1} q_{2} \ldots q_{n} \left(q_{2}=1-p_{2}, i=1,2, \ldots, n\right) .
$$
