---
tag: WNBWJVA9Y6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Guessing numbers.) Someone writes down a multi-digit and several, for example, 3 single-digit numbers. The first number is multiplied by 2 and 1 is added to the product. The result is then multiplied by 5 and the second number is added. We multiply by 2 again, add 1, multiply by 5 again, and add the third number. We multiply by 2 once more, add 1, and finally multiply by 5 and add the fourth number. If we know the number obtained as a result, we can find the numbers as follows. We subtract 555 from the result (generally a number consisting of as many fives as the number of times 5 appears as a multiplier). The difference in the units, tens, hundreds, and thousands, gives the written numbers. For example, let the numbers to be guessed be $435,6,8,9$. Then

$$
[(\{[(435 \times 2+1) 5+6] \times 2+1\} \times 5+8) 2+1] \times 5+9=436244
$$

But

$$
436244-555=435689
$$

so the difference is indeed composed of the original numbers in the manner mentioned. Explain the correctness of the procedure.
