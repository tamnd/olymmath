---
tag: 49DQT3JXZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=156538
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The above solution is good enough in the context of the SMC. However, if you couldn't assume that one of the options must be correct, then, to show that the approximate percentage reduction is $13 \%$, you would need to show that the percentage reduction lies between $12.5 \%$ and $13.5 \%$. That is, you would need to show that $0.865<\frac{\sqrt{3}}{2}<0.875$, or, equivalently, that $1.73<\sqrt{3}<1.75$.
You could do this by doing a calculation to show that $1.73^{2}<3<1.75^{2}$. Alternatively, you could calculate $\sqrt{3}$ to the appropriate number of decimal places. This is easy with a calculator, but what could you do if you don't have a calculator? There is an old fashioned method for calculating square roots by hand which resembles long division. This was taught in schools until about fifty years ago. See if you can find out what this method is, perhaps using the internet.
Then use this method to calculate $\sqrt{3}$ to three decimal places.
9.2 The sequence defined by
$$
x_{1}=1, x_{n+1}=\frac{x_{n}+3}{x_{n}+1}
$$
gives better and better approximations to $\sqrt{3}$. (We say that it converges to $\sqrt{3}$ ). The first three terms are $x_{1}=1, x_{2}=\frac{1+3}{1+1}=2$, and $x_{3}=\frac{2+3}{2+1}=\frac{5}{3}$.
(a) Find the values of $x_{4}$ and $x_{5}$.
(b) Show that if the sequence converges, then it converges to $\sqrt{3}$.
(c) Find a similar rule for a sequence that converges to $\sqrt{5}$.
9.3 The Generalized Binomial Theorem, discovered by Isaac Newton, tells us that if $|x|<1$, then
$$
(1+x)^{\alpha}=1+\alpha x+\frac{\alpha(\alpha-1)}{2!} x^{2}+\frac{\alpha(\alpha-1)(\alpha-2)}{3!} x^{3}+\cdots
$$

Use the first three terms of this series with $x=-\frac{1}{4}$ and $\alpha=\frac{1}{2}$ to obtain an approximation to $\frac{\sqrt{3}}{2}$.
9.4 What method does your calculator use to evaluate square roots?
