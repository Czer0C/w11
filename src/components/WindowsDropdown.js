import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";

function WindowsDropdown() {
  return (
    <DropdownMenu.Root className="root">
      <DropdownMenu.Trigger className="trigger">Click me</DropdownMenu.Trigger>

      <DropdownMenu.Content className="content">
        <DropdownMenu.Item className="item">Tab One</DropdownMenu.Item>
        <DropdownMenu.Item className="item">Tab Two</DropdownMenu.Item>

        <DropdownMenu.Root>
          <DropdownMenu.TriggerItem className="item">
            View
            <div style={{ marginLeft: "auto" }}>
              <ChevronRightIcon />
            </div>
          </DropdownMenu.TriggerItem>
          <DropdownMenu.Content className="content content--drop">
            <DropdownMenu.Item className="item">
              Auto arrange icons
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item className="item">
              Align icons to grid
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default WindowsDropdown;
