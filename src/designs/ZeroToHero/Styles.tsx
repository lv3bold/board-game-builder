import styled from "styled-components";

export const shadow = "box-shadow: 0 0 1mm black;";

export const TitleBar = styled.div`
  display: flex;
  height: 14mm;
  background-color: #eceff1;
  align-items: center;
  height: 10mm;
  ${shadow};
  position: relative;
  z-index: 2;
`;

export const Title = styled.span`
  font-size: 4mm;
  margin: 0 3mm;
`;

export const ContainerForSidebar = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-size: cover;
  position: relative;
  z-index: 1;
  background-position: center;
`;

export const Sidebar = styled.div`
  background-color: #eceff1;
  display: flex;
  flex-direction: column;
  ${shadow};
  position: relative;
  z-index: 2;
  margin-top: 5mm;
  width: 10mm;
`;

export const sidebarIconStyle = { fontSize: "5.5mm", marginRight: "0.5mm" };

const sidebarItemFontSize = 3;

export const SidebarItem = styled.span<{ hide?: boolean }>`
  display: flex;
  height: 10mm;
  width: 10mm;
  align-items: center;
  justify-content: center;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
  font-size: ${sidebarItemFontSize}mm;

  * {
    font-size: ${sidebarItemFontSize}mm;
  }
`;
