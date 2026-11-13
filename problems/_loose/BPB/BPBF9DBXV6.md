---
tag: BPBF9DBXV6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560346
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10102
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212098
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Kevin has $255$ cookies, each labeled with a unique nonempty subset of $\{1,2,3,4,5,6,7,8\}$ . Each day, he chooses one cookie uniformly at random out of the cookies not yet eaten. Then, he eats that cookie, and all remaining cookies that are labeled with a subset of that cookie (for example, if he chooses the cookie labeled with $\{1,2\}$ , he eats that cookie as well as the cookies with $\{1\}$ and $\{2\}$ ). The expected value of the number of days that Kevin eats a cookie before all cookies are gone can be expressed in the form $\frac{m}{n}$ , where $m$ and $n$ are relatively prime positive integers. Find $m + n$ .

*Proposed by Ray Li*
