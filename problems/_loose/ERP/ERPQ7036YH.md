---
tag: ERPQ7036YH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a government has decided to help it's people by giving them $n$ coupons for $n$ fundamental things, but because of being unmanaged, the giving of the coupons to the people is random. in each time that a person goes to the office to get a coupon, the office manager gives him one of the $n$ coupons randomly and with the same probability. It's obvious that in this system a person may get a coupon that he had it before.
suppose that $X_n$ is the random varieble of the first time that a person gets all of the $n$ coupons. show that $\frac{X_n}{n ln(n)}$ in probability converges to $1$.
