import React from "react";
import PropTypes from "prop-types";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { FontAwesome, Entypo } from '@expo/vector-icons'; 

const StyledIcon = styled(Icon)`
  margin: ${({ margin }) => (margin ? `0 ${margin}px` : "0 1px")};
`;
const StyledFontAwesome = styled(FontAwesome)`
  margin: ${({ margin }) => (margin ? `0 ${margin}px` : "0 1px")};
`;
const StyledEntypo = styled(Entypo)`
  margin: ${({ margin }) => (margin ? `0 ${margin}px` : "0 1px")};
`;
const StyledImage = styled(Image)`
  margin: ${({ margin }) => (margin ? `0 ${margin}px` : "0 1px")};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

const IconBar = ({
  name,
  size,
  color,
  margin,
  onIconTap,
  readonly,
  position,
  type,
  selectedIconImage,
  emptyIconImage,
  filled = false,
  totalCount,
  isAccessible,
}) => (
  <TouchableOpacity
    activeOpacity={1}
    accessible={isAccessible}
    importantForAccessibility={isAccessible ? "yes" : "no"}
    pointerEvents={readonly ? "none" : "auto"}
    accessibilityLabel={`Press to rate ${position + 1} out of ${totalCount}`}
    accessibilityRole="button"
    onPress={() => {
      if (!readonly && onIconTap) {
        onIconTap(position + 1);
      }
    }}
  >
    {type === "custom" ? 
      <StyledImage
        source={filled ? selectedIconImage : emptyIconImage}
        margin={margin}
        size={size}
      />
     : (type === "fontawesome" ? 
        <StyledFontAwesome name={name} size={size} color={color} margin={margin} /> :
        (type === "entypo" ? 
        <StyledEntypo name={name} size={size} color={color} margin={margin} /> :
        <StyledIcon name={name} size={size} color={color} margin={margin} />
     )
     )}
  </TouchableOpacity>
);

IconBar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  name: PropTypes.string,
  margin: PropTypes.number,
  onIconTap: PropTypes.func,
  readonly: PropTypes.bool,
  position: PropTypes.number,
  filled: PropTypes.bool,
  type: PropTypes.oneOf(["icon", "custom", "fontawesome", "entypo"]),
  selectedIconImage: PropTypes.node,
  emptyIconImage: PropTypes.node,
  totalCount: PropTypes.number,
};

export default IconBar;