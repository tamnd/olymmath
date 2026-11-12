---
tag: KGW1WX4N0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
First, let's familiarize ourselves with the theoretical concepts and knowledge related to the divisibility of polynomials.

The canonical form of a polynomial with variable $ x $ is its representation as a sum of monomials in decreasing (or increasing) powers of $ x $.

The general form of a polynomial $ P(x) $, arranged in decreasing powers of $ x $,

$$
P(x) = a_{0} x^{n} + a_{1} x^{n-1} + a_{2} x^{n-2} + \cdots + a_{n-1} x + a_{n} \left(a_{0} \neq 0\right)
$$

The highest degree of the monomials that make up the polynomial is called the degree of the polynomial. In this case, it is equal to $ n $. (It is assumed that $ n $ is a natural number or zero.)

Theorem 1. Two polynomials with the same variable, represented in canonical form, are identical if and only if they consist of the same terms.

The proof of the theorem is not simple. It can be found, for example, in the textbook [15] (or in the book [38]).

We say that a polynomial $ f(x) $ is divisible by a polynomial $ \varphi(x) $ if there exists a polynomial $ q(x) $ such that

$$
f(x) = \varphi(x) \cdot q(x).
$$

In this case, the polynomial $ f(x) $ is called the dividend, the polynomial $ \varphi(x) $ is the divisor, and $ q(x) $ is the quotient.

The divisibility of polynomials has properties similar to the divisibility of integers. For example, if polynomials $ f_{1}(x) $ and $ f_{2}(x) $ are divisible by the polynomial $ \varphi(x) $, then the polynomials

$$
f_{1}(x) \pm f_{2}(x), f_{1}(x) \cdot f(x), C f_{1}(x)
$$

where $ f(x) $ is any polynomial and $ C $ is any constant, are also divisible by $ \varphi(x) $. Prove this statement independently, for example, for the case of the sum.

The following theorem about the division of polynomials with a remainder is valid.

Theorem 2. For any two polynomials $ f(x) $ and $ \varphi(x) $, there exists and is unique a pair of polynomials $ q(x) $ and $ r(x) $, where the degree of $ r(x) $ is less than the degree of $ \varphi(x) $ or $ r(x) $ is identically zero, such that the identity

$$
f(x) = \varphi(x) q(x) + r(x)
$$

holds.

The polynomial $ f(x) $ is called the dividend, the polynomial $ \varphi(x) $ is the divisor, $ q(x) $ is the quotient (incomplete quotient if the polynomial $ r(x) $ is not identically zero), and $ r(x) $ is the remainder.

The proof of the theorem can be found in books [15], [24], or [38].

Equation (1) can be considered a special case of equation (2), when the remainder $ r(x) $ is identically zero.

In practice, the division of a polynomial by a polynomial with a remainder is performed "by corner" - according to a rule very similar to the rule for dividing natural numbers with a remainder.

Example. Find the quotient and remainder from the division of the polynomial $ f(x) = 2 x^{4} - x^{3} - 3 x^{2} + x + 1 $ by the polynomial $ \varphi(x) = x^{2} + x + 2 $.
