describe("login_petstore", () => {
  beforeEach(() => {
    cy.visit("https://petstore.octoperf.com/actions/Account.action");
  });
  it("tc-01", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img'
    )
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();
    // cy.get('tbody > :nth-child(2) > :nth-child(2)').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    cy.get(":nth-child(3) > th").contains("16.50");

    cy.get("#BackLink > a").click();
  });

  it("tc-02", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img'
    )

      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();
    // cy.get('tbody > :nth-child(2) > :nth-child(2)').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    cy.get(":nth-child(3) > th").contains("18.50");

    cy.get("#BackLink > a").click();
  });

  it("tc-03", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img'
    )

      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    cy.get(":nth-child(3) > th").contains("58.50");

    cy.get("#BackLink > a").click();
  });
  it("tc-04", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=REPTILES"] > img'
    )
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    cy.get(":nth-child(3) > th").contains("18.50");

    cy.get("#BackLink > a").click();
  });
  it("tc-05", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img'
    )
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    cy.get(":nth-child(3) > th").contains("193.50");

    cy.get("#BackLink > a").click();
  });
  it("tc-06", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img'
    )
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();

    cy.get("#BackLink > a").click();

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=REPTILES"] > img'
    )
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();

    cy.get("#BackLink > a").click();

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=CATS"] > img'
    )
      .should("be.visible")
      .click();
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();

    cy.get("#BackLink > a").click();

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=DOGS"] > img'
    )
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();

    cy.get("#BackLink > a").click();

    cy.get(
      '#SidebarContent > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img'
    )
      .should("be.visible")
      .click();
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();

    cy.get("#BackLink > a").click();


    cy.get('[href="/actions/Cart.action?viewCart="] > img').click();

    cy.get(':nth-child(2) > :nth-child(8) > .Button').click();
  
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get('.Button').click();


    cy.get('[colspan="2"] > table > tbody > :nth-child(6) > th').contains("112.00");
    cy.get('#BackLink > a').click()
  });

  it("tc-07", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get('#MainImageContent')
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    cy.get(":nth-child(3) > th").contains("193.50");

    cy.get("#BackLink > a").click();
  });
  it("tc-08", () => {
    cy.get('input[name="password"]').clear();
    // ตรวจสอบว่า input field ของ username ปรากฏ
    cy.get('input[name="username"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่า input field ของ password ปรากฏ
    cy.get('input[name="password"]').should("be.visible").type("j2ee");

    // ตรวจสอบว่ามีปุ่ม Sign In และสามารถคลิกได้
    cy.get('input[name="signon"]')
      .should("be.visible")
      .and("be.enabled")
      .click();

    cy.url().should(
      "include",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.get('#QuickLinks > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img')
      .should("be.visible")
      .click();

    cy.get("tbody > :nth-child(2) > :nth-child(1) > a")
      .should("be.visible")
      .click();

    cy.get(":nth-child(2) > :nth-child(5) > .Button")
      .should("be.visible")
      .click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();

    cy.get(":nth-child(14) > td > input").click();

    cy.get('[name="newOrder"]').click();
    cy.get('[name="newOrder"]').click();
    cy.get(".Button").click();

    cy.get(":nth-child(3) > th").contains("16.50");

    cy.get("#BackLink > a").click();
  });
});
