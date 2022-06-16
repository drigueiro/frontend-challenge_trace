import { styled } from "../../stitches.config";

export const Input = styled("input", {
  width: "100%",
  backgroundColor: "gainsboro",
  border: "1px solid gray",
  borderRadius: 5,
  fontSize: 12,
  lineHeight: "1",
  fontWeight: 500,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 16,
  paddingRight: 16,
  marginTop: 10,
  marginBottom: 10,
  "&:hover": {
    backgroundColor: "#cccccc",
  },
  when: {
    sm: {
      minHeight: 80,
      borderRadius: 0,
    },
  },
  variants: {
    bio: {
      info: {
        justifyContent: "start",
        minHeight: 80,
      },
    },
  },
});
